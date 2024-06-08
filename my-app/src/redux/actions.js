export const FETCH_PAINTINGS_REQUEST = 'FETCH_PAINTINGS_REQUEST';
export const FETCH_PAINTINGS_SUCCESS = 'FETCH_PAINTINGS_SUCCESS';
export const FETCH_PAINTINGS_FAILURE = 'FETCH_PAINTINGS_FAILURE';

export const fetchPaintingsRequest = () => ({
  type: FETCH_PAINTINGS_REQUEST,
});

export const fetchPaintingsSuccess = (paintings) => ({
  type: FETCH_PAINTINGS_SUCCESS,
  payload: paintings,
});

export const fetchPaintingsFailure = (error) => ({
  type: FETCH_PAINTINGS_FAILURE,
  payload: error,
});

export const fetchPaintings = () => {
  return (dispatch) => {
    dispatch(fetchPaintingsRequest());
    fetch(`${process.env.PUBLIC_URL}/paintings.json`)
      .then((response) => response.json())
      .then((data) => dispatch(fetchPaintingsSuccess(data)))
      .catch((error) => dispatch(fetchPaintingsFailure(error)));
  };
};
