<script setup lang="ts">
const isOpen = ref(false);
const query = ref("");

// Simulación de estructura (para que veas cómo se verá)
const groups = [
  { key: "services", label: "Servicios" },
  { key: "actions", label: "Acciones" },
];
</script>
<template>
  <UModal title="Hola">
    <UButton variant="outline" color="neutral" icon="i-lucide-search">
      <template #default>
        <span class="hidden xs:block text-slate-400">Search...</span>
      </template>
    </UButton>
    <template #content>
      <div class="p-4 flex flex-col gap-4">
        <UInput
          v-model="query"
          placeholder="Busca servicios, acciones..."
          variant="none"
          icon="i-lucide-search"
          size="xl"
          autofocus
          class="border-b border-gray-200 dark:border-gray-800 pb-2"
        >
          <template #trailing v-if="query">
            <UButton
              color="neutral"
              variant="link"
              icon="i-lucide-x"
              :padded="false"
              @click="query = ''"
            />
          </template>
        </UInput>

        <div class="min-h-50 max-h-100 overflow-y-auto">
          <div v-if="query && false" class="text-center text-gray-500 py-8">
            <UIcon name="i-lucide-file-warning" class="w-8 h-8 mb-2 mx-auto" />
            <p>No encontramos nada para "{{ query }}"</p>
          </div>

          <div v-else class="space-y-4">
            <div v-for="group in groups" :key="group.key">
              <h3 class="text-xs font-semibold text-gray-400 uppercase mb-2">
                {{ group.label }}
              </h3>
              <div class="space-y-1">
                <div
                  class="h-8 rounded bg-gray-50 dark:bg-gray-800/50 flex items-center px-2 text-sm text-gray-400"
                >
                  Aquí irán tus resultados...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </UModal>
</template>
