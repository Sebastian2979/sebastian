<x-mail::message>
# Neue Kontaktanfrage

**Name:** {{ $name }}  
**E-Mail:** {{ $email }}

**Nachricht:**

{{ $content }}

<x-mail::button :url="'mailto:'.$email">
Antworten
</x-mail::button>

Danke,<br>
{{ config('app.name') }}
</x-mail::message>
