<template>
  <div>
    <div v-if="item.children && item.children.length > 0">
      <a-sub-menu :key="item.name">
        <template #title>
          <span>{{ item.title }}</span>
        </template>
        <template v-for="c of item.children" :key="c.name">
          <a-menu-item @click="changeRoute(c.link || c.path)">
            <span>{{ c.title }}</span>
          </a-menu-item>
        </template>
        <!-- <MenuItem :item="c"></MenuItem> -->
      </a-sub-menu>
    </div>
    <div v-else @click="changeRoute(item.path)">
      <a-menu-item :key="item.name">
        {{ item.title }}
      </a-menu-item>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "MenuItem",
  props: {
    item: Object,
    sub: String,
  },
  setup() {
    const route = useRouter();
    const changeRoute = (to) => {
      route.push({ path: to });
    };

    return {
      changeRoute,
    };
  },
};
</script>