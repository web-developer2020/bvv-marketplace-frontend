import { computed, readonly, ref, shallowRef, Ref, onMounted, onUnmounted } from 'vue';

export default function onWindowResize() {
  const windowWidth = ref(window.innerWidth);
  const onWidthChange = () => {
    windowWidth.value = window.innerWidth;
  };
  onMounted(() => window.addEventListener('resize', onWidthChange));
  onUnmounted(() => window.removeEventListener('resize', onWidthChange));

  return {
    windowWidth,
  };
}
