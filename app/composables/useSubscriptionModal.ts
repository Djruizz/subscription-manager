// useCreateSubscriptionModal.ts
import {type Tables} from '~/types/database.types'

export const useSubscriptionModal = () => {
  const isOpen = useState('modal-open', () => false)
  const isEdit = useState('modal-edit', () => false)
  // Añadimos una referencia para los datos
  const selectedSub = useState<Tables<'subscriptions'> | undefined>('selected-sub', () => undefined)

  const openCreate = () => {
    isEdit.value = false
    selectedSub.value = undefined
    isOpen.value = true
  }

  const openEdit = (sub: Tables<'subscriptions'>) => {
    isEdit.value = true
    selectedSub.value = sub
    isOpen.value = true
  }
  const close = () => {
    isOpen.value = false;
    
  };

  return { isOpen, isEdit, selectedSub, openCreate, openEdit, close }
}