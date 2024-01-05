import { defineStore } from 'pinia'
export const useTagsViewStore = defineStore('tags-view', () => {
  // other options...
  const visitedViews = ref<any[]>([])

  const addView = (view: any) => {
    visitedViews.value.find((v) => v.path === view.path) ? '' : visitedViews.value.push(view)
  }

  const removeView = (view: any) => {
    visitedViews.value = visitedViews.value.filter((v: any) => v.path !== view.path)
  }

  const closeOthersViews = (view: any) => {
    visitedViews.value = visitedViews.value.filter((v: any) => v.path === view.path)
  }
  const closeLeftViews = (view: any) => {
    visitedViews.value = visitedViews.value.filter((v: any) => v.path === view.path)
  }
  const closeRightViews = (view: any) => {
    visitedViews.value = visitedViews.value.filter((v: any) => v.path === view.path)
  }
  const closeAllViews = (view: any) => {
    visitedViews.value = visitedViews.value.filter((v: any) => v.path === view.path)
  }
  const clearAllViews = () => {
    visitedViews.value = []
  }
  const getAllViews = () => {
    return visitedViews.value
  }
  return {
    visitedViews,
    addView,
    removeView,
    closeOthersViews,
    closeLeftViews,
    closeRightViews,
    closeAllViews,
    clearAllViews,
    getAllViews
  }
})
