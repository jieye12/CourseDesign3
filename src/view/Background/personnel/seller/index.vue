<template>
  <el-card style="height: 80px;">
    <el-form :inline="true" class="form">
      <el-form-item label="用户名:">
        <el-input placeholder="请你输入搜索卖家的用户名" v-model="keyword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="default" :disabled="keyword ? false : true" @click="search">搜索</el-button>
        <el-button type="primary" size="default" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <el-card style="margin: 10px 0px;">
    <el-button type="primary" size="default" @click="addUser">添加用户</el-button>
    <el-button type="primary" size="default" :disabled="selectIdArr.length ? false : true"
      @click="deleteSelectUser">批量删除</el-button>
    <!-- table展示用户信息 -->
    <el-table @selection-change="selectChange" style="margin: 10px 0px;" border :data="userArr">
      <el-table-column type="selection" align="center"></el-table-column>
      <el-table-column label="#" align="center" type="index"></el-table-column>
      <el-table-column label="ID" align="center" prop="id"></el-table-column>
      <el-table-column label="用户名字" align="center" prop="realName" show-overflow-tooltip></el-table-column>
      <el-table-column label="用户名称" align="center" prop="userName" show-overflow-tooltip></el-table-column>
      <el-table-column label="手机号" align="center" prop="phone" show-overflow-tooltip></el-table-column>
      <el-table-column label="电子邮箱" align="center" prop="mail" show-overflow-tooltip></el-table-column>
      <el-table-column label="店铺名称" align="center" prop="storeName" show-overflow-tooltip></el-table-column>
      <el-table-column label="店铺地址" align="center" prop="storeAddress" show-overflow-tooltip></el-table-column>
      <el-table-column label="店铺描述" align="center" prop="storeDescription" show-overflow-tooltip></el-table-column>
      <el-table-column label="相关服务" align="center" prop="returnPolicy" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" width="200px" align="center">
        <template #="{ row, $index }">
          <el-button type="primary" size="small" icon="Edit" @click="updateUser(row)">编辑</el-button>
          <el-popconfirm :title="`你确定要删除${row.username}?`" width="260px" @confirm="deleteUser(row.id)">
            <template #reference>
              <el-button type="primary" size="small" icon="Delete">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[5, 7, 9, 11]"
      :background="true" layout="prev, pager, next, jumper,->,sizes,total" :total="total" @current-change="getHasUser"
      @size-change="handler" />
  </el-card>
  <!-- 抽屉结构:完成添加新的用户账号|更新已有的账号信息 -->
  <el-drawer v-model="drawer">
    <!-- 头部标题:将来文字内容应该动态的 -->
    <template #header>
      <h4>{{ userParams.id ? '更新用户' : '添加用户' }}</h4>
    </template>
    <!-- 身体部分 -->
    <template #default>
      <el-form :model="userParams" :rules="rules" ref="formRef">
        <el-form-item label="用户姓名" prop="realName">
          <el-input placeholder="请您输入用户姓名" v-model="userParams.realName"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称" prop="username">
          <el-input placeholder="请您输入用户昵称" v-model="userParams.username"></el-input>
        </el-form-item>
        <el-form-item label="用户手机号" prop="phone">
          <el-input placeholder="请您输入用户手机号" v-model="userParams.phone"></el-input>
        </el-form-item>
        <el-form-item label="用户邮箱" prop="mail">
          <el-input placeholder="请您输入用户邮箱" v-model="userParams.mail"></el-input>
        </el-form-item>
        <el-form-item label="用户店铺名称" prop="storeName">
          <el-input placeholder="请您输入店铺名称" v-model="userParams.storeName"></el-input>
        </el-form-item>
        <el-form-item label="店铺地址" prop="storeAddress">
          <el-input placeholder="请您输入店铺地址" v-model="userParams.storeAddress"></el-input>
        </el-form-item>
        <el-form-item label="店铺描述" prop="storeDescription">
          <el-input placeholder="请您输入店铺描述" v-model="userParams.storeDescription"></el-input>
        </el-form-item>
        <el-form-item label="相关服务" prop="returnPolify">
          <el-input placeholder="请您输入相关服务" v-model="userParams.returnPolicy"></el-input>
        </el-form-item>
      </el-form>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="save">确定</el-button>
      </div>
    </template>
  </el-drawer>
  <!-- 抽屉结构:用户某一个已有的账号进行职位分配 -->
  <el-drawer v-model="drawer1">
    <template #header>
      <h4>分配角色(职位)</h4>
    </template>
    <template #default>
      <el-form>
        <el-form-item label="用户姓名">
          <el-input v-model="userParams.username" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="职位列表">
          <el-checkbox @change="handleCheckAllChange" v-model="checkAll"
            :indeterminate="isIndeterminate">全选</el-checkbox>
          <!-- 显示职位的的复选框 -->
          <el-checkbox-group v-model="userRole" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="(role, index) in allRole" :key="index" :label="role">{{ role.roleName
              }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="drawer1 = false">取消</el-button>
        <el-button type="primary" @click="confirmClick">确定</el-button>
      </div>
    </template>
  </el-drawer>
</template>
<script setup lang="ts">
import useLayOutSettingStore from '@/store/modules/setting'
import { ref, onMounted, reactive, nextTick } from 'vue';
import { ElMessage } from 'element-plus';
//默认页码
let pageNo = ref<number>(1);
//一页展示几条数据
let pageSize = ref<number>(5);
//用户总个数
let total = ref<number>(0);
//存储全部用户的数组
let userArr = ref(
  [
    {
      id: 2,
      realName: "张明",
      gender: "男",
      userName: "techworld",
      phone: "13899887766",
      mail: "techworld@store.com",
      storeName: "科技世界数码专营店",
      storeType: "科技产品",
      storeAddress: "北京市朝阳区建国路88号",
      storeDescription: "提供各种新颖科技产品，涵盖智能家居、智能穿戴等领域。",
      returnPolicy: "商品支持15天无理由退换货，退货需保持产品完好，扣除10%的服务费用。"
    }, {
      id: 3,
      realName: "王芳",
      gender: "女",
      userName: "gadgetqueen",
      phone: "13987654321",
      mail: "gadgetqueen@store.com",
      storeName: "时尚潮品数码店",
      storeType: "时尚潮品",
      storeAddress: "广州市天河区珠江新城花城大道1号",
      storeDescription: "提供时尚潮流数码产品，包括配件、装饰品等。",
      returnPolicy: "商品支持30天退货，但必须保持完好无损，不影响二次销售。"
    },
    {
      id: 4,
      realName: "刘强",
      gender: "男",
      userName: "electrozone",
      phone: "13765432109",
      mail: "electrozone@store.com",
      storeName: "电子之家",
      storeType: "家用电器",
      storeAddress: "深圳市南山区科技园中一路1号",
      storeDescription: "专业销售家用电器，涵盖厨房电器、清洁电器等。",
      returnPolicy: "商品质量问题支持7天无理由退换货，其他情况不支持退货。"
    },
    {
      id: 5,
      realName: "陈慧",
      gender: "女",
      userName: "beautytech",
      phone: "13612345678",
      mail: "beautytech@store.com",
      storeName: "美容科技专卖店",
      storeType: "美容仪器",
      storeAddress: "上海市静安区南京西路888号",
      storeDescription: "销售美容仪器，助力美容护肤。",
      returnPolicy: "商品质量问题支持7天无理由退换货，其他情况不予退货。"
    },
    {
      id: 6,
      realName: "赵阳",
      gender: "男",
      userName: "smartliving",
      phone: "13598765432",
      mail: "smartliving@store.com",
      storeName: "智能生活馆",
      storeType: "智能家居",
      storeAddress: "杭州市西湖区西溪路168号",
      storeDescription: "提供智能家居产品，打造智能生活体验。",
      returnPolicy: "商品质量问题支持15天无理由退换货，其他情况不予退货。"
    },
    {
      id: 7,
      realName: "周伟",
      gender: "男",
      userName: "gamerparadise",
      phone: "13987654321",
      mail: "gamerparadise@store.com",
      storeName: "游戏天堂",
      storeType: "游戏设备",
      storeAddress: "成都市武侯区锦绣路123号",
      storeDescription: "提供游戏设备、周边配件等。",
      returnPolicy: "商品质量问题支持10天无理由退换货，其他情况不支持退货。"
    }






  ]
);
//定义响应式数据控制抽屉的显示与隐藏
let drawer = ref<boolean>(false);
//控制分配角色抽屉显示与隐藏
let drawer1 = ref<boolean>(false);
//存储全部职位的数据
let allRole = ref<AllRole>([]);
//当前用户已有的职位
let userRole = ref<AllRole>([]);
//收集用户信息的响应式数据
let userParams = reactive<User>({
  userName: '',
  realName: '',
  gender: "",
  phone: "",
  mail: "",
  storeName: "",
  storeType: "",
  storeAddress: "",
  storeDescription: "",
  returnPolicy: ""
});
//准备一个数组存储批量删除的用户的ID
let selectIdArr = ref<User[]>([]);
//获取form组件实例
let formRef = ref<any>();
//定义响应式数据:收集用户输入进来的关键字
let keyword = ref<string>('');
//获取模板setting仓库
let settingStore = useLayOutSettingStore();
//组件挂载完毕
onMounted(() => {
  getHasUser();
});
//获取全部已有的用户信息
const getHasUser = async (pager = 1) => {
  //收集当前页码
  pageNo.value = pager;
  let result: UserResponseData = await reqUserInfo(pageNo.value, pageSize.value, keyword.value);
  if (result.code == 200) {
    total.value = result.data.total;
    userArr.value = result.data.records;
  }
}
//分页器下拉菜单的自定义事件的回调
const handler = () => {
  getHasUser();
}
//添加用户按钮的回调
const addUser = () => {
  //抽屉显示出来
  drawer.value = true;
  //清空数据
  Object.assign(userParams, {
    id: 0,
    username: '',
    name: '',
    password: ''
  });
  //清除上一次的错误的提示信息
  nextTick(() => {
    formRef.value.clearValidate('username');
    formRef.value.clearValidate('name');
    formRef.value.clearValidate('password');
  });
}
//更新已有的用户按钮的回调
//row:即为已有用户的账号信息
const updateUser = (row: User) => {
  //抽屉显示出来
  drawer.value = true;
  //存储收集已有的账号信息
  Object.assign(userParams, row);
  //清除上一次的错误的提示信息
  nextTick(() => {
    formRef.value.clearValidate('username');
    formRef.value.clearValidate('name');
  });
}
//保存按钮的回调
const save = async () => {
  //点击保存按钮的时候,务必需要保证表单全部复合条件在去发请求
  await formRef.value.validate()
  //保存按钮:添加新的用户|更新已有的用户账号信息
  let result: any = await reqAddOrUpdateUser(userParams);
  //添加或者更新成功
  if (result.code == 200) {
    //关闭抽屉
    drawer.value = false;
    //提示消息
    ElMessage({ type: 'success', message: userParams.id ? '更新成功' : '添加成功' });
    //获取最新的全部账号的信息
    // getHasUser(userParams.id ? pageNo.value : 1);
    //浏览器自动刷新一次
    window.location.reload();
  } else {
    //关闭抽屉
    drawer.value = false;
    //提示消息
    ElMessage({ type: 'error', message: userParams.id ? '更新失败' : '添加失败' });
  }
}
//取消按钮的回调
const cancel = () => {
  //关闭抽屉
  drawer.value = false;
}
//校验用户名字回调函数
const validatorUsername = (rule: any, value: any, callBack: any) => {
  //用户名字|昵称,长度至少五位
  if (value.trim().length >= 5) {
    callBack();
  } else {
    callBack(new Error('用户名字至少五位'))
  }
}
//校验用户名字回调函数
const validatorname = (rule: any, value: any, callBack: any) => {
  //用户名字|昵称,长度至少五位
  if (value.trim().length >= 5) {
    callBack();
  } else {
    callBack(new Error('用户昵称至少五位'))
  }
}
const validatorPassword = (rule: any, value: any, callBack: any) => {
  //用户名字|昵称,长度至少五位
  if (value.trim().length >= 6) {
    callBack();
  } else {
    callBack(new Error('用户密码至少六位'))
  }
}
//表单校验的规则对象
const rules = {
  //用户名字
  username: [{ required: true, trigger: 'blur', validator: validatorUsername }],
  //用户昵称
  name: [{ required: true, trigger: 'blur', validator: validatorname }],
  //用户的密码
  password: [{ required: true, trigger: 'blur', validator: validatorPassword }],
}
//分配角色按钮的回调
const setRole = async (row: User) => {
  //存储已有的用户信息
  Object.assign(userParams, row);
  //获取全部的职位的数据与当前用户已有的职位的数据
  let result: AllRoleResponseData = await reqAllRole((userParams.id as number));
  if (result.code == 200) {
    //存储全部的职位
    allRole.value = result.data.allRolesList;
    //存储当前用户已有的职位
    userRole.value = result.data.assignRoles;
    //抽屉显示出来
    drawer1.value = true;
  }

}

//收集顶部复选框全选数据
const checkAll = ref<boolean>(false);
//控制顶部全选复选框不确定的样式
const isIndeterminate = ref<boolean>(true);
//顶部的全部复选框的change事件
const handleCheckAllChange = (val: boolean) => {
  //val:true(全选)|false(没有全选)
  userRole.value = val ? allRole.value : [];
  //不确定的样式(确定样式)
  isIndeterminate.value = false
}
//顶部全部的复选框的change事件
const handleCheckedCitiesChange = (value: string[]) => {
  //顶部复选框的勾选数据
  //代表:勾选上的项目个数与全部的职位个数相等，顶部的复选框勾选上
  checkAll.value = value.length === allRole.value.length;
  //不确定的样式
  isIndeterminate.value = value.length !== allRole.value.length
}
//确定按钮的回调(分配职位)
const confirmClick = async () => {
  //收集参数
  let data: SetRoleData = {
    userId: (userParams.id as number),
    roleIdList: userRole.value.map(item => {
      return (item.id as number)
    })
  }
  //分配用户的职位
  let result: any = await reqSetUserRole(data);
  if (result.code == 200) {
    //提示信息
    ElMessage({ type: 'success', message: '分配职务成功' });
    //关闭抽屉
    drawer1.value = false;
    //获取更新完毕用户的信息,更新完毕留在当前页
    getHasUser(pageNo.value);

  }
}

//删除某一个用户
const deleteUser = async (userId: number) => {
  let result: any = await reqRemoveUser(userId);
  if (result.code == 200) {
    ElMessage({ type: 'success', message: '删除成功' });
    getHasUser(userArr.value.length > 1 ? pageNo.value : pageNo.value - 1);
  }
}
//table复选框勾选的时候会触发的事件
const selectChange = (value: any) => {
  selectIdArr.value = value;
}
//批量删除按钮的回调
const deleteSelectUser = async () => {
  //整理批量删除的参数
  let idsList: any = selectIdArr.value.map(item => {
    return item.id;
  });
  //批量删除的请求
  let result: any = await reqSelectUser(idsList);
  if (result.code == 200) {
    ElMessage({ type: 'success', message: '删除成功' });
    getHasUser(userArr.value.length > 1 ? pageNo.value : pageNo.value - 1);
  }
}

//搜索按钮的回调
const search = () => {
  //根据关键字获取相应的用户数据
  getHasUser();
  //清空关键字
  keyword.value = '';
}
//重置按钮
const reset = () => {
  settingStore.refsh = !settingStore.refsh;
}
</script>

<style scoped>
.form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>