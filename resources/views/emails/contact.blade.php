<h1>{{ $title }}</h1>
<h3>Sender Info</h3>
<p>--------------------</p>
<p>Name : {{ $name }}</p>
@if(isset($email))
    <p>Email : {{ $email }}</p>
@endif
@if(isset($phone))
    <p>Phone : {{ $phone }}</p>
@endif
<hr>
<h3> Message</h3>
<p>--------------------</p>
<p>{{ $form_message }}</p>
