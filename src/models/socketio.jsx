import io from 'socket.io-client'
let socket;
export default {
    namespace: 'socketio',
    state: {
        data:null,
        default:null,
    },

    effects: {
        *update({ payload }, { put, call }) {
            // console.log('update: ', payload.name);
            yield put({
                // type: 'save',
                // payload: {
                //     data: payload.data,
                // },

            })
            // console.log(payload.data);
        }
    },

    reducers: {  // Reducers 必须是纯函数，所以同样的输入必然得到同样的输出，它们不应该产生任何副作用。
        // 并且，每一次的计算都应该使用immutable data，这种特性简单理解就是每次操作都是返回一个全新的数据
        save(state, { payload }) {
            return {
                ...state,
                data: payload.data,
                default: payload.default,
            }
        },
        init(state, { payload }) {
            return {
                ...state,
                default: payload.default    
            }
        }
    },
    // polling websocket
    subscriptions: {
        setupHistory({ dispatch, history }) {
            history.listen((location) => {
                console.log(location.pathname);
                socket = io.connect('http://192.168.1.106:9096/',{
                    transports: ['websocket','polling']
                })
                socket.on('connect', () => {//刚连接成功，为传值
                    console.log('socket连接成功.');
                    dispatch({
                        type: 'save',
                        payload: {
                            default:null
                        }
                    });
                });

                socket.on('disconnect', (reason) => {//断开链接
                    console.log('socket断开连接.')
                    dispatch({
                        type: 'init',
                        payload:{
                            default:"default"
                        }
                    });
                    // console.log("断开：",this.payload.default)
                })
                socket.on('StateSelfCheckEvent', data => {//连接成功后传递数据
                    console.log('StateSelfCheckEventdata:',data);
                    dispatch({
                        type: 'save',
                        payload: {
                            data:data
                        }
                    });
                })
            })
        },
    },

}