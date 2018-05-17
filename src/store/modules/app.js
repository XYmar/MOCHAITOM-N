import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    },
    language: Cookies.get('language') || 'en',
    projectNum: Cookies.get('projectNum'),
    projectName: Cookies.get('projectName')
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    },
    SET_PROJECTNUM: (state, projectNum) => {
      state.projectNum = projectNum
      Cookies.set('projectNum', projectNum)
    },
    SET_PROJECTNAME: (state, projectName) => {
      state.projectName = projectName
      Cookies.set('projectName', projectName)
    }
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    },
    setProjectNum: ({ commit }, projectNum)  => {
      commit('SET_PROJECTNUM', projectNum)
    },
    setProjectName: ({ commit }, projectName)  => {
      commit('SET_PROJECTNAME', projectName)
    }
  }
}

export default app
