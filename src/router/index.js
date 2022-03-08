import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
    meta: {
      layout: 'main',
    }
  },
  {
    path: '/multiplayer',
    name: 'Multiplayer',
    component: () => import('@/views/Multiplayer'),
    meta: {
      layout: 'main',
    }
  },
  {
    path: '/multiplayer/squad-join',
    name: 'SquadJoin',
    component: () => import('@/views/SquadJoin'),
    meta: {
      layout: 'second',
    }
  },
  {
    path: '/multiplayer/quickmatch',
    name: 'Quickmatch',
    component: () => import('@/views/Quickmatch'),
    meta: {
      layout: 'without-header',
    }
  },
  {
    path: '/menu-campaign',
    name: 'MenuCampaign',
    component: () => import('@/views/MenuCampaign'),
    meta: {
      layout: 'main',
    },
  },
  {
    path: '/menu-campaign/campaign',
    name: 'Campaign',
    component: () => import('@/views/Campaign'),
    meta: {
      layout: 'second',
    }
  },
  {
    path: '/soldier',
    name: 'Soldier',
    component: () => import('@/views/Soldier'),
    meta: {
      layout: 'main',
    }
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('@/views/Store'),
    meta: {
      layout: 'main',
    }
  },
  {
    path: '/more',
    name: 'More',
    component: () => import('@/views/More'),
    meta: {
      layout: 'main',
    }
  },
  {
    path: '/battlepacks',
    name: 'Battlepacks',
    component: () => import('@/views/Battlepacks'),
    meta: {
      layout: 'second',
    }
  },
  {
    path: '/career',
    name: 'Career',
    component: () => import('@/views/Career'),
    meta: {
      layout: 'without-header',
    }
  },
  {
    path: '/watch',
    name: 'Watch',
    component: () => import('@/views/Watch'),
    meta: {
      layout: 'without-header',
    }
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/News'),
    meta: {
      layout: 'without-header',
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('@/views/Help'),
    meta: {
      layout: 'without-header',
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
