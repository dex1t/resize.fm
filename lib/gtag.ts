export const GA_ID = process.env.ga_id;
export const pageview = (path) => {
  window.gtag("config", GA_ID, {
    page_path: path,
  });
};
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  });
};
