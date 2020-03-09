export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL'

export function getPhotos(year, userId) {
  return dispatch => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year
    })
    // экшен с типом REQUEST (запрос начался)
    // диспатчится сразу, как будто-бы перед реальным запросом
    //eslint-disable-next-line no-undef
    VK.Api.call('photos.getAll', {owner_id: +userId,  photo_sizes:1,  v: '5.80', extended:1}, function(r) {
      if (r.response) {
        const photos=r.response.items;
        dispatch({
          type: GET_PHOTOS_SUCCESS,
          payload: photos
        })
      } else {
        dispatch({
          type: GET_PHOTOS_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        })
      }
      });
  }
}