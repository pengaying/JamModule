import request from "../utils/request";

export async function Jamtarget(params) {
  return request('http://192.168.1.100:8081/',{
    method: 'POST',
  })
}
async function JamBlockingTarget(params) {
  return request('http://192.168.1.100:8081/',{
    method: 'POST',
    params:params,
  })
}