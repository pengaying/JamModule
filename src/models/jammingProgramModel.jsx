import {Jamtarget,JamBlockingTarget} from "../services/services";
export default {
    namespace: 'jammingProgramData',
    state: { },

    effects: {
        *JamDataFetch({ payload }, { put, call }) {
            const res = yield call(Jamtarget,payload);
            yield put({
                type:'JamtargetData',
                payload:res,
            })    
        },
        *JamBlockingData({ payload }, { put, call }) {
           console.log('2222222222222222',payload)
            // yield call(JamBlockingTarget,payload);
            yield put({
                type:'JamtargetData',
            })    
        }
    },

    reducers: {  // Reducers 必须是纯函数，所以同样的输入必然得到同样的输出，它们不应该产生任何副作用。
        // 并且，每一次的计算都应该使用immutable data，这种特性简单理解就是每次操作都是返回一个全新的数据
        JamtargetData(state, { payload }) {
            return {
                ...state,
                data: payload,
            }
        },
    },
    subscriptions: {
        setupHistory({ dispatch, history }) {
            history.listen((location) => {
                if(location.pathname==='/jammingModeSet'){
                    dispatch({
                        type: 'JamDataFetch',
                    });
                } 
            })
        },
    },
}