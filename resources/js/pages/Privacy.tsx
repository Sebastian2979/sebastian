import React from 'react'

const Privacy = () => {
  return (
    <div className="className='flex justify-center items-center min-h-screen p-4 text-gray-700 leading-relaxed">
    <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Datenschutzerklärung</h2>

        <p className='mb-2'><strong>1. Allgemeine Hinweise</strong><br/>
        Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und den Zweck der Verarbeitung personenbezogener Daten auf dieser Website gemäß der Datenschutz-Grundverordnung (DSGVO).</p>

        <p className='mb-2'><strong>2. Verantwortlicher</strong><br/>
        Sebastian Kitschke<br/>
        Seegefelder Straße 71<br/>
        13583 Berlin<br/>
        E-Mail: <a href="mailto:sebastian@pumo.digital" className="text-blue-600 hover:underline"> info@pumo.digital</a></p>

        <p className='mb-2'><strong>3. Zugriffsdaten</strong><br/>
        Beim Besuch dieser Website erhebt der Hostinganbieter automatisch Daten (sogenannte Server-Logfiles), darunter:<br/>
        - Browsertyp und -version<br/>
        - verwendetes Betriebssystem<br/>
        - Referrer-URL<br/>
        - Hostname des zugreifenden Rechners<br/>
        - Uhrzeit der Serveranfrage<br/>
        - IP-Adresse<br/>
        Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt.</p>

        <p className='mb-2'><strong>4. Cookies</strong><br/>
        Diese Website verwendet keine Cookies, außer technisch notwendigen.</p>

        <p className='mb-2'><strong>5. Kontaktaufnahme</strong><br/>
        Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage sowie für den Fall von Anschlussfragen gespeichert. Diese Daten werden ohne Ihre Einwilligung nicht weitergegeben.</p>

        <p className='mb-2'><strong>6. Rechte der betroffenen Personen</strong><br/>
        Sie haben das Recht auf:<br/>
        - Auskunft über Ihre gespeicherten Daten<br/>
        - Berichtigung unrichtiger Daten<br/>
        - Löschung Ihrer Daten (sofern keine gesetzliche Aufbewahrungspflicht besteht)<br/>
        - Einschränkung der Verarbeitung<br/>
        - Widerspruch gegen die Verarbeitung<br/>
        - Datenübertragbarkeit</p>

        <p className='mb-2'><strong>7. Beschwerderecht</strong><br/>
        Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren, z. B. bei der Berliner Beauftragten für Datenschutz:  
        <a href="https://www.datenschutz-berlin.de" className="text-blue-600 hover:underline" target="_blank"><br/> www.datenschutz-berlin.de</a></p>

        <p className='mb-2'><strong>8. Änderungen dieser Datenschutzerklärung</strong><br/>
        Ich behalte mir vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.</p>

        <p className="text-sm text-gray-400">Stand: 01.08.2025</p>
    </div>
</div>
  )
}

export default Privacy