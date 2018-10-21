
export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
    onStateChange(state) {
      /* 在state改变后保存到本地 */
    },
  },
};

