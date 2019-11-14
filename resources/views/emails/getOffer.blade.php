<h1>{{ $title }}</h1>
<h3>Sender Info</h3>
<p>--------------------</p>
<p>Name : {{ $f_name .' ' .$l_name }}</p>
<p>Email : {{ $email }}</p>
<p>Phone : {{ $phone }}</p>
<hr>
<h3> service details</h3>
<p>--------------------</p>
<p>Photo : {{ 'https://rowad-un.com/'.$photo }}</p>
<p>Region : {{ $region }}</p>
<p>Service : {{ $service }}</p>
<p>type : {{ $type }}</p>
<p>length : {{ $length }}  -  width : {{$width}}  -  height : {{$height}} </p>

<hr>
<h3> Notes</h3>
<p>{{ $notes }}</p>
