export const BEGIN_DRAGGING = "BEGIN_DRAGGING";
export const STOP_DRAGGING = "STOP_DRAGGING";

const beginDragging = tweet => ({
  type: BEGIN_DRAGGING,
  tweet
});

export const stopDragging = () => ({
  type: STOP_DRAGGING
})

export const startDragging = tweet => dispatch => {
  dispatch(beginDragging(tweet));
}