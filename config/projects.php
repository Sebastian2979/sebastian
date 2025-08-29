<?php

return [
  // Jedes Projekt ist ein Array – ergänze nach Bedarf
  [
    'id' => 1,
    'slug' => 'blogsystem',
    'title' => 'Blogsystem',
    'excerpt' => 'Blog mit Laravel 12, Breeze, Blade, TinyMCE und Spatie Media Library.',
    'body' => <<<HTML
            <p>
                  Dieses Blogsystem verbindet ein aufgeräumtes Frontend mit einer soliden, gut
                  erweiterbaren Architektur. Nutzerinnen und Nutzer verfassen Beiträge, überarbeiten
                  sie bei Bedarf und entfernen sie wieder, während ein persönlicher Feed durch
                  Folgen-Beziehungen entsteht. Likes und Kommentare fördern echten Austausch; eine
                  durchdachte Kategorisierung hält Inhalte auffindbar und die Oberfläche stets
                  übersichtlich.
                </p>

                <p>
                  Für die mediale Gestaltung setze ich auf die Spatie&nbsp;Media&nbsp;Library: Bilder
                  werden komfortabel hochgeladen, in Sammlungen organisiert und automatisch in
                  optimierten Varianten bereitgestellt. Damit das Schreiben leicht von der Hand geht,
                  ist <strong>TinyMCE</strong> als WYSIWYG-Editor integriert - mit intuitiver
                  Formatierung, schnellem Einfügen von Medien und einem Look-and-Feel, das dem finalen
                  Ergebnis bereits sehr nahekommt.
                </p>

                <p>
                  Unter der Haube arbeiten klar strukturierte Models, Migrations, Factories und
                  Seeders zusammen; Policies setzen Autorrechte konsequent durch. Blade-Templates und
                  maßgeschneiderte Directives sorgen für präzises Templating, Pagination hält Seiten
                  schlank, und rechenintensive Aufgaben wie Bildkonvertierungen laufen asynchron über
                  die Queue. So entsteht eine moderne Publishing-Erfahrung, die sowohl als persönliches
                  Notizbuch als auch als Grundlage für eine lebendige Community überzeugt.
                </p>
        HTML,
    'cover' => '/images/blogsystem.png', // Datei in public/images ablegen
    'categories' => ['Laravel', 'React', 'Tailwind'],
    'url' => 'https://app.pumo.digital',
  ],
  [
    'id' => 2,
    'slug' => 'todo',
    'title' => 'Todo App',
    'excerpt' => 'Todo App mit Laravel 12, Breeze, Blade und Tailwind CSS',
    'body' => <<<HTML
                     
                          <p>
                            Diese kleine To-do-Applikation habe ich mit <strong>Laravel 12</strong> umgesetzt, um meine Kenntnisse im Bereich moderner Webentwicklung zu vertiefen.
                            Als Authentifizierungslösung dient <strong>Laravel Breeze</strong>, das eine schlanke Userverwaltung (Login, Registrierung, Passwort-Reset) bereitstellt.
                            Das Frontend basiert auf <strong>Blade Templates</strong> und <strong>Tailwind CSS</strong>, wodurch ein klares, responsives Layout mit minimalem CSS-Aufwand entsteht.
                          </p>
                          <br/>

                          <strong>Funktionen:</strong>
                          <ul>
                            <li>Nutzerregistrierung &amp; Anmeldung (Breeze)</li>
                            <li>Aufgaben anlegen, bearbeiten, abhaken und löschen</li>
                            <li>Übersicht der offenen und erledigten Aufgaben</li>
                            <li>Responsives Design dank Tailwind CSS</li>
                            <li>Strukturierter Code nach MVC-Prinzip mit Laravel</li>
                          </ul>
                          <br/>

                          <p>
                            Das Projekt zeigt, wie man mit wenig Boilerplate-Code eine funktionale, benutzerfreundliche Anwendung erstellen kann.
                            Es diente mir außerdem als Einstieg in die Arbeit mit <strong>Breeze</strong> und als praktische Übung in der Kombination von
                            <strong>Blade</strong> und <strong>Tailwind CSS</strong>.
                          </p>        
                        

        HTML,
    'cover' => '/images/todo.png', // Datei in public/images ablegen
    'categories' => ['Laravel', 'React', 'Tailwind'],
    'url' => 'https://todo.pumo.digital',
  ],
  // weitere Projekte …
];
