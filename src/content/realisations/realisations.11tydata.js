module.exports = {
  layout: "layouts/realisation-detail.njk",
  tags: ["realisations"],
  permalink: function (data) {
    return "/realisations/" + data.page.fileSlug + "/";
  }
};
