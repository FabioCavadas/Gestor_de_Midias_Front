export default {
    beforeMount(el, binding) {
      if (!binding.value) {
        el.style.display = 'none';
      }
    }
  };
  