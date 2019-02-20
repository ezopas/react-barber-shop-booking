import React, { Component } from 'react';
import BookingTitle from './../../components/BookingTitle';
import Welcome from './../../components/Welcome';
import Info from './../../components/Info';
import About from './../../components/About';
import Services from './../../components/Services';
import './../../data/styles/flaticon.css';
import './../../data/styles/icomoon.css';
//import { withRouter } from 'react-router-dom';
//import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { compose } from 'redux';
import 'moment';
import './styles.scss'
import BookingList from "../../components/BookingList";
import $ from "jquery";
import 'bootstrap';
import swal from "sweetalert";

class Index extends Component {

    render(){
        return(
            <div>
                <Welcome/>
                <Info/>
                <About/>
                <Services/>
                <div className='container'>
                    <BookingTitle/>
                    <BookingList/>
                </div>
            </div>
        );
    }


    componentDidMount(){

        var lastEventId = null;

        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'agendaWeek,agendaDay,listWeek'
            },
            defaultView: 'agendaWeek',
            defaultDate: '2019-03-04',
            slotDuration: '00:15:00',
            slotLabelFormat: 'HH:mm',
            weekends: false,
            minTime: '10:00:00',
            maxTime: '20:00:00',
            selectable: true,
            editable: false,
            allDaySlot: false,
            eventDurationEditable: false,
            disableDragging: true,
            themeSystem: 'bootstrap4',
            eventLimit: true,
            views: {
                agenda: {
                    eventLimit: 1 // adjust to 6 only for agendaWeek/agendaDay
                }
            },

            select: function(start, end) {

                //var title = prompt('If you wish book at: ' + moment(start,'yyyyMMddHHmmssfff').format('HH:mm') +'\n Please write your full name:');
            if (lastEventId == 100){
                swal("Attention!", "Only one reservation avalable", "warning");
            }else {
                swal({
                    title: "Enter Full name:",
                    content: {
                        text: "Enter your Full name:",
                        showCancelButton: true,
                        element: "input",
                        closeOnConfirm: true,
                        animation: "slide-from-top",
                        attributes: {
                            placeholder: "Name",
                            type: "text",
                        },

                    },
                    buttons: {
                        cancel: true,
                        confirm: "Confirm",
                    },
                    closeOnClickOutside: false,
                })
                    .then(function (value) {
                        let title = value;

                        let eventData;

                        end = $.fullCalendar.moment(start);
                        end.add(15, 'minutes');
                        if (title) {
                            eventData = {
                                title: title,
                                start: start,
                                end: end,
                                id: 100,
                            };
                            //jau ar klientas nebegali antro deti
                            let jau = false;
                            if (jau) {
                                return false;
                            } else {
                                $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
                                lastEventId = eventData.id;
                                console.log(eventData);
                                swal({
                                    icon: "success",
                                });


                                //prepend("<span class='closeon'>X</span>");
                            }
                        }
                        $('#calendar').fullCalendar('unselect');
                    });
                }
            },

            eventSources: [
                {
                    url: '/data.json', // use the `url` property
                    color: 'brown',    // an option!
                    textColor: 'white',  // an option!
                    data: {
                        name: 'disable',
                    }
                }
            ],

            events: {

            },

            eventRender: function(event, element, view) {

                // element.find(".fc-title").hide(".fc-title");
                // if(lastEventId == 100)

                if (view.name == 'listWeek') {
                    if(lastEventId == 100)
                    element.find(".fc-list-item-time").append("<span class='closeon'>X</span>");
                } else {
                    if(lastEventId == 100)
                    element.find(".fc-content").prepend("<span class='closeon'>X</span>");
                }
                element.find(".closeon").on('click', function() {
                    $('#calendar').fullCalendar('removeEvents', 100);
                    lastEventId = null;
                    element.find(".closeon").hide(".closeon");
                    console.log('delete');
                });
            },

            // if(lastEventId = 100){
            //
            // },

            // eventDrop: function(event, delta, revertFunc) {
            //
            //     event_data = {
            //         event: {
            //             id: event.id,
            //             start: event.start.format(),
            //             end: event.end.format(),
            //         }
            //     };
            //     $.ajax({
            //         url: event.update_url,
            //         data: event.data,
            //         type: 'POST'
            //     });
            //     //
            //     // alert(event.title + " was dropped on " + event.start.format());
            //     //
            //     // if (!confirm("Are you sure about this change?")) {
            //     //     revertFunc();
            //     // }
            // },
            //
            // droppable: false, // this allows things to be dropped onto the calendar
            //
            // eventClick: function(event, jsEvent, view) {
            //     $.getScript(event.edit_url, function() {
            //         $('#event_date_range').val(moment(event.start).format("MM/DD/YYYY HH:mm") + ' - ' + moment(event.end).format("MM/DD/YYYY HH:mm"))
            //         date_range_picker();
            //         $('.start_hidden').val(moment(event.start).format('YYYY-MM-DD HH:mm'));
            //         $('.end_hidden').val(moment(event.end).format('YYYY-MM-DD HH:mm'));
            //     });
            // }

        })
    }
}

export default Index;
