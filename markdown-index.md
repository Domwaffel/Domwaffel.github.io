# Dominix website
## Es wird aber erstmal getestet

Hier kommt die Erste Code-Box:

```markdown

<h1>Domwaffels Website</h1>

<script type="text/javascript">
  function iFrameAnpassen(iframe) {
    if(iframe) {
      iframe.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }
  }
</script>

<iframe src="https://www.html-seminar.de/"
width="95%" height="100" name="iFrameBeispiel" onload="iFrameAnpassen(this)" >

  <p>Ihr Browser kann leider keine eingebetteten Frames anzeigen:
  Sie können die eingebettete Seite über den folgenden
  Verweis aufrufen:
  https://www.html-seminar.de/
  </p>

</iframe>
```

Hier sind aufzählungspunkte
- Num 1
- Num 2

Und hier sind sie numeriert
1. Num 1
2. Num 2

man kann auch in **Bold**, _Italic_ und `Code` schreiben

button
[button url="http://www.google.com"]



testing an iFrame in markdown

<iframe src="https://www.html-seminar.de/"
width="95%" height="500" name="iFrameBeispiel" onload="iFrameAnpassen(this)" >

  <p>Ihr Browser kann leider keine eingebetteten Frames anzeigen:
  Sie können die eingebettete Seite über den folgenden
  Verweis aufrufen:
  https://www.html-seminar.de/
  </p>

</iframe>
