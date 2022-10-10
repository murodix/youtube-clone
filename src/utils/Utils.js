import moment from 'moment';

const formatPublishedAt = (publishedDate) => {
    return moment(publishedDate).fromNow();
}

const formatViews = (views) => {
  if (views >= 1000000000) {
    return (views / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (views >= 1000) {
    return (views / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return views;
};

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export { formatViews, truncateText, formatPublishedAt };
