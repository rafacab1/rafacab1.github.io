<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                h2 {
                  border: 1px solid black;
                  text-align: center;
                  padding: 20px;
                  margin: 20px;
                }

                table {
                    text-align: center;
                    margin-left: auto;
                    margin-right: auto;
                }

                tr {
                background-color: pink;
                }
                
                </style>
            </head>
            <body>
                <h2>El tiempo en Córdoba. Datos AEMET</h2>
                <table border="1">
                    <tr>
                        <th>Día</th>
                        <th>Estado cielo</th>
                        <th>Temperatura máx</th>
                        <th>Temperatura min</th>
                    </tr>
                    <xsl:for-each select="root/prediccion/dia">
                        <tr>
                            <td>
                                <xsl:value-of select="@fecha" />
                            </td>
                            <td>
                                <xsl:value-of select="estado_cielo/@descripcion"/>
                            </td>
                            <td>
                                <xsl:value-of select="temperatura/maxima" />
                            </td>
                            <td>
                                <xsl:value-of select="temperatura/minima" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>