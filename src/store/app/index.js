
export default {
    namespaced: true,
    state: {
        rdxgStatusToken: {},
        tabList: [],
        tabs: [],
        close: false,
    },
    mutations: {
        SET_RDXG_STATUS_TOKEN(state, payload) {
            state.rdxgStatusToken = payload;
        },
        SET_IS_CLOSE(state, payload) {
            state.close = payload;
        },
        SET_TAB_LIST(state, payload) {
            if(state.close) {
                console.log(state.tabList);
                for(let i=0; i<state.tabList.length; i++) {
                    let itemi = state.tabList[i];
                    if(itemi.id == payload.id) {
                        console.log("删除");
                        state.tabList.splice(i, 1);
                        Array.from(new Set(state.tabs)).splice(i, 1);
                        // state.tabs.splice(i, 1);
                        console.log(state.tabs);
                        console.log(state.tabList);
                    }
                }
            } else {
                console.log(payload);
                state.tabs.push(payload);
                state.tabList = Array.from(new Set(state.tabs));
                console.log(state.tabList);
            }
        }
    }
}