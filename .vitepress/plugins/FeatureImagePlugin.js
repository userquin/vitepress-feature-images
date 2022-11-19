export default function FeatureImagePlugin() {
    return {
        name: 'vitepress-feature-image-plugin',
        enforce: 'pre',
        transform(code, id) {
            if (
                id.includes('VPFeature.vue') &&
                !id.endsWith('.css') &&
                !id.includes('&setup=')
            ) {
                return `
<script setup lang="ts">
import VPLink from './VPLink.vue'
import VPIconArrowRight from './icons/VPIconArrowRight.vue'
defineProps<{
  icon?: string
  title: string
  details: string
  link?: stringv
  linkText?: string
}>()
const imgDescriptions: Record<string, { alt: string }> = { 
  '/vitepress.svg': { alt: 'VitePress Logo' },
  '/vite.svg': { alt: 'Vite Logo' },
  '/vitest.svg': { alt: 'Vitest Logo' }
}
</script>

<template>
  <VPLink class="VPFeature" :href="link" :no-icon="true">
    <article class="box">
      <img v-if="icon" :src="icon" width="48" height="48" :title="imgDescriptions[icon].alt">
<!--
      <img v-if="icon === 'vitepress.svg'" src="/vitepress.svg" width="48" height="48" title="VitePress Logo">
      <img v-if="icon === 'vite.svg'" src="/vite.svg" width="48" height="48" title="Vite Logo">
      <img v-if="icon === 'vitest.svg'" src="/vitest.svg" width="48" height="48" title="Vitest Logo">
-->      
      <h2 class="title">{{ title }}</h2>
      <p class="details">{{ details }}</p>

      <div v-if="linkText" class="link-text">
        <p class="link-text-value">
          {{ linkText }} <VPIconArrowRight class="link-text-icon" />
        </p>
      </div>
    </article>
  </VPLink>
</template>

<style scoped>
.VPFeature {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}
.VPFeature.link:hover {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-bg);
}
.dark .VPFeature.link:hover {
  background-color: var(--vp-c-bg-mute);
}
.box {
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 6px;
  background-color: var(--vp-c-gray-light-4);
  width: 48px;
  height: 48px;
  font-size: 24px;
  transition: background-color 0.25s;
}
.dark .icon {
  background-color: var(--vp-c-gray-dark-5);
}
.title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
}
.details {
  flex-grow: 1;
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
.link-text {
  padding-top: 8px;
}
.link-text-value {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand);
  transition: color 0.25s;
}
.VPFeature.link:hover .link-text-value {
  color: var(--vp-c-brand-dark);
}
.link-text-icon {
  display: inline-block;
  margin-left: 6px;
  width: 14px;
  height: 14px;
  fill: currentColor;
}
</style>
`;
            }
        },
    };
}