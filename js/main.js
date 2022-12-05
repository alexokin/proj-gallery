'use strict'
console.log('Starting up');


$(onInit)

function onInit() {
    renderProjs()
    console.log('page is ready');
}

function renderProjs() {
    var projectMap = getProjs()
    console.log('projects', projectMap)
    var strHTMLs = projectMap.map(project => `
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
                  <li>Date: January 2017</li>
                  <li>Client: Explore</li>
                  <li>Category: ${project.labels}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`)
  $('.projects-container').html(strHTMLs)
//   addCarEventListeners()
}

