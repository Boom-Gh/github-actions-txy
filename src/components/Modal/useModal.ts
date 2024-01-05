const openData = reactive<{ [key: number]: boolean }>({})

export default function useModal():any {
  const modal = ref<any>(null)
  const loaded = ref<boolean>(false)
  const uid = ref(0)
  function register(modalMethod:any, uuid: number) {
    if (!getCurrentInstance()) {
      throw new Error('useModal() can only be used inside setup() or functional components!')
    }

    uid.value = uuid
    modal.value = modalMethod
    loaded.value = true

    modalMethod.emitOpen = (open: boolean, uid: number) => {
      openData[uid] = open
    }
  }
  
  const getInstance = () => {
    const instance = unref(modal)
    if (!instance) {
      console.error('useModal instance is undefined!')
    }
    return instance
  }

  const methods = {
    openModal: () => {
      const instance = getInstance()
      if (!instance) return
      // instance.emitOpen(true, uid.value)
      
      getInstance()?.setModalProps({
        open,
      })
    },

    closeModal: () => {
      getInstance()?.setModalProps({ open: false })
    },
  }

   
  return [
    register,
    methods
  ]
}
