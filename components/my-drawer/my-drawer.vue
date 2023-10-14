<template>
	<div class="my-drawer">
		<el-menu default-active="1-5-1" class="el-menu-vertical-demo" @select="handleSelect"
			:collapse="isCollapse">
			<el-menu-item index="1">
				<i class="el-icon-menu"></i>
				<span slot="title">主页</span>
			</el-menu-item>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-s-fold"></i>
					<span slot="title"  >电子钱包</span>
				</template>
				<el-menu-item-group>
					<span slot="title">电子钱包</span>
					<el-menu-item index="2-1">电子钱包历史记录</el-menu-item>
					<el-menu-item index="2-2">电子钱包取款</el-menu-item>
					<el-menu-item index="2-3">电子钱包取款状况</el-menu-item>
					<el-menu-item index="2-4">奖金说明</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-menu-item index="3">
				<i class="el-icon-menu"></i>
				<span slot="title">经销商注册</span>
			</el-menu-item>
			<el-submenu index="4">
				<template slot="title">
					<i class="el-icon-s-fold"></i>
					<span slot="title"  >购物</span>
				</template>
				<el-menu-item-group>
					<span slot="title">购物</span>
					<el-menu-item index="4-1">产品购买</el-menu-item>
					<el-menu-item index="4-2">购买历史记录</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="5">
				<template slot="title">
					<i class="el-icon-s-fold"></i>
					<span slot="title"  >报告</span>
				</template>
				<el-menu-item-group>
					<span slot="title">报告</span>
					<el-menu-item index="5-1">小组销售报告</el-menu-item>
					<el-menu-item index="5-2">Member Tree</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-menu-item index="6">
				<template slot="title">
					<i class="el-icon-menu"></i>
					<span slot="title">架构图</span>
				</template>
			</el-menu-item>
			<el-menu-item index="10">
				<i class="el-icon-menu"></i>
				<span slot="title">公告表</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isCollapse: false,
			};
		},
		methods: {
			handleSelect(index){
				// console.log(index)
				this.$emit('viewIndex',index);
			}
		},
	};
</script>

<style scoped>
	*{
		padding: 0rpx;
		margin: 0rpx;
	}

	.my-drawer {
		/* 样式规则 */
		width: 100%;
		z-index: 9999;
	}
</style>