import React, { Component } from 'react';
import BookingList from '../../components/BookingList';
import './../../components/BookingList/z.css';
import './style.scss';
import $ from "jquery";
import swal from "sweetalert";

class Barber extends Component {

    componentDidMount(){
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
            editable: true,
            allDaySlot: false,
            eventDurationEditable: false,
            disableDragging: true,

            eventRender: function(event, element, view) {
                if (view.name == 'listWeek') {
                    element.find(".fc-list-item-time").append("<span class='closeon'>X</span>");
                } else {
                    element.find(".fc-content").prepend("<span class='closeon'>X</span>");
                }
                element.find(".closeon").on('click', function() {
                    $('#calendar').fullCalendar('removeEvents',event._id);
                    console.log('delete');
                });
            },

            select: function(start, end) {

                //var title = prompt('If you wish book at: ' + moment(start,'yyyyMMddHHmmssfff').format('HH:mm') +'\n Please write your full name:');

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
                    .then(function(value) {
                        let title = value;

                        var eventData;

                        end =  $.fullCalendar.moment(start);
                        end.add(15, 'minutes');
                        if (title) {
                            eventData = {
                                title: title,
                                start: start,
                                end: end,
                            };
                            //jau ar klientas nebegali antro deti
                            let jau = false;
                            if(jau) {
                                return false;
                            }else{
                                $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
                                swal({
                                    icon: "success",
                                });
                            }
                        }
                        $('#calendar').fullCalendar('unselect');
                    });
            },

            eventSources: [

                // your event source
                {
                    url: '/db.json', // use the `url` property
                    color: 'brown',    // an option!
                    textColor: 'white',  // an option!
                    data: {
                        confirmed: 'something',
                    }
                }

                // any other sources...

            ],

            events: {

            },

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

    render(){
        return(
            <div className='container above'>
                <h2>Barber's Appointment Calendar</h2>
                <BookingList/>
            </div>
        );
    }
}

export default Barber;
