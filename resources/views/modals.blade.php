@if( Session::has('modal_message_success'))
    <script type="text/javascript">
        $(document).ready(function() {
            $('#popupmodal').modal();
            $('#successModal').modal();
        });
    </script>



    <!-- Modal -->
    <div class="modal fade" id="successModal" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h3>{{trans('modals.contactRowad')}}</h3>
                </div>
                <div class="modal-body">
                    <p>
                        {{ Session::get('modal_message_success') }}
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">{{trans('modals.close')}}</button>
                </div>
            </div>

        </div>
    </div>


@endif
