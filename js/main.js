"use strict";
console.log("Starting up");

$(onInit);

function onInit() {
  renderProjs();
  console.log("page is ready");
}

function renderProjs() {
  var projectMap = getProjs();
  console.log("projects", projectMap);
  var modalHTMLs = projectMap.map(
    (project) => `
    <div class="portfolio-modal modal fade" id="${project.id}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${project.name}</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}.jpg" alt="">
                <p>${project.desc}</p>
                <ul class="list-inline">
                  <li>Date: ${project.date}</li>
                  <li>Client: Explore</li>
                  <li>Category: ${project.labels}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
                <button class="btn btn-primary checkout-btn" onclick="onGetUrl('${project.id}')">Check It Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
  );
  var modalgridHTMLs = projectMap.map(
    (project) => `
  <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#${project.id}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${project.id}.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">Illustration</p>
          </div>
        </div>`
  );
  $(".projects-container").html(modalHTMLs);
  $(".modalgrid-container").html(modalgridHTMLs);

  //   addCarEventListeners()
}

function onGetUrl(projId) {
  var project = getProjById(projId);
  var url = project.url;
  window.open(url, "_blank");
}

$(".contact-submit").on("click", function () {
  var subject = $("#mail-subject").val();
  var email = $("#user-email").val();
  var body = $("#message-body").val();
  var url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su='${subject}'&body=${body}`;
  window.open(url, "_blank");
});
