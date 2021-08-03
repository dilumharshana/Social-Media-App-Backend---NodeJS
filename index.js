const url = new URL("https:facebook.com:8000/friends/dilshansajintha/friends?id=0011&NAME=KASUN&PROFILE=ACTIVE");
url.searchParams.append('status','appended')

console.log(url.searchParams);