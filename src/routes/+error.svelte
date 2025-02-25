<script lang="ts">
  import { page } from '$app/state';
</script>


<div class="w-full text-white">
<div class="text-9xl">🫠</div>
<div class="text-2xl text-center">{page.error?.message}</div>
</div>