<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
  <html lang="es">
    <head>
        <title>Listado de productos</title>
        <meta charset="utf-8"/>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <!-- <link href="/lm/css/main.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+SC|Rubik&display=swap" rel="stylesheet">  
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> -->
    </head>

    <body>
    <h1>Listado de productos</h1>
    <ul>
      <xsl:for-each select="/inventario/producto">
        <li>Elemento: <xsl:value-of select="@codigo"/></li>
        <ul>
          <xsl:for-each select="./">
          <li>
          <xsl:value-of select="."/>
          <xsl:if test="name(.) = 'peso'"><xsl:value-of select="@unidad"/></xsl:if>
          </li>
          </xsl:for-each>
        </ul>
      </xsl:for-each>
    </ul>
    </body>
</html>
  </xsl:template>
</xsl:stylesheet>
