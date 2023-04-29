/* eslint-disable @typescript-eslint/no-var-requires */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/index.vue'

const routes: Array<RouteRecordRaw> = require
  .context('../pages/', true)
  .keys()

  // filter for vue files
  .filter((name: string) => name.match(/\.vue$/))

  // map to create an array of routes
  .map((localPath: string) => {
    // remove './' from start
    const fileName = localPath.substring(2, localPath.length)

    // remove '.vue' suffix
    const name: string = fileName.replace(/\.[^/.]+$/, '')

    // get corresponding vue component
    const component: any = require('../pages/' + fileName).default

    // path which displays the component
    const path: string = `/${name === 'index' ? '' : name.toLocaleLowerCase()}`

    const route: RouteRecordRaw = {
      path,
      name,
      component
    }

    return route
  })

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
