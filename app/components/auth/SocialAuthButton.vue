<script setup lang="ts">
import IconsIconGoogle from "~/components/icons/IconGoogle.vue";
import IconsIconApple from "~/components/icons/IconApple.vue";
import IconsIconFacebook from "~/components/icons/IconFacebook.vue";

const { signInWithOAuth } = useAuth();

type Provider = "google" | "apple" | "facebook";

const props = defineProps<{
  provider: Provider;
}>();

const loading = ref(false);

const icons = {
  google: IconsIconGoogle,
  apple: IconsIconApple,
  facebook: IconsIconFacebook,
} as const;

const Icon = computed(() => icons[props.provider]);

const handleClick = async () => {
  await signInWithOAuth(props.provider);
};
</script>

<template>
  <UButton
    color="neutral"
    variant="outline"
    size="xl"
    class="rounded-full size-12 flex justify-center items-center"
    :loading="loading"
    @click="handleClick"
    disabled
  >
    <component :is="Icon" />
  </UButton>
</template>
