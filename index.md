# Domwaffels website
## Es wird aber erstmal getestet

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
