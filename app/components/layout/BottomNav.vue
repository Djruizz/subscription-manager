<script setup lang="ts">
const route = useRoute();
const { mobileMenu } = useNavigation();

const isActive = (path: string) => {
  if (path === "/dashboard") {
    return route.path === "/dashboard";
  }
  return route.path.startsWith(path);
};
const activeIndex = computed(() =>
  mobileMenu.findIndex((i) => {
    if (i.to === "/dashboard") {
      return route.path === "/dashboard";
    }
    return route.path.startsWith(i.to);
  })
);
</script>
<template>
  <nav
    class="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/75 backdrop-blur border-t border-slate-800 h-16 m-5 rounded-xl"
  >
    <div class="relative w-full z-10 h-full flex justify-around items-center">
      <div
        class="absolute bottom-2 z-0 h-1 rounded-full bg-emerald-500 transition-[left] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        :style="{
          width: `calc(100% / ${mobileMenu.length} *0.1)`,
          left: `calc(
              (${activeIndex} * (100% / ${mobileMenu.length}))
              + ((100% / ${mobileMenu.length} - (100% / ${mobileMenu.length} * 0.1)) / 2)
            )`,
        }"
      />
      <UButton
        v-for="item in mobileMenu"
        class="rounded-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        :class="isActive(item.to) ? '-translate-y-1 scale-105' : ''"
        :color="isActive(item.to) ? 'primary' : 'neutral'"
        :variant="isActive(item.to) ? 'soft' : 'ghost'"
        :icon="item.icon"
        :to="item.to"
        size="xl"
      ></UButton>
    </div>
  </nav>
</template>
