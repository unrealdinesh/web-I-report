<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <title>Bookstore Inventory - XSLT Render</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #f4f6f9;
            color: #212529;
            padding: 24px;
          }
          .container {
            max-width: 850px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #ced4da;
            border-radius: 6px;
            padding: 24px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          }
          h2 {
            color: #1e70bf;
            font-size: 20px;
            margin-bottom: 8px;
            border-bottom: 2px solid #1e70bf;
            padding-bottom: 6px;
          }
          .subtitle {
            font-size: 13.5px;
            color: #555555;
            margin-bottom: 18px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13.5px;
            margin-top: 10px;
          }
          th {
            background-color: #1e70bf;
            color: #ffffff;
            text-align: left;
            padding: 10px 12px;
            font-weight: 600;
          }
          td {
            padding: 10px 12px;
            border-bottom: 1px solid #e9ecef;
          }
          tr:nth-child(even) {
            background-color: #f8f9fa;
          }
          tr:hover {
            background-color: #edf2fa;
          }
          .price-tag {
            font-weight: bold;
            color: #2b8a3e;
          }
          .price-high {
            font-weight: bold;
            color: #c92a2a;
          }
          .category-tag {
            display: inline-block;
            font-size: 11px;
            text-transform: uppercase;
            padding: 2px 8px;
            border-radius: 12px;
            font-weight: bold;
            background-color: #e0f2fe;
            color: #0369a1;
          }
          .lang-badge {
            font-size: 11px;
            color: #6c757d;
            margin-left: 4px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Bookstore Catalog (Rendered via XSLT)</h2>
          <p class="subtitle">XML data styled and transformed into responsive HTML using XSLT.</p>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
                <th>Price</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="bookstore/book">
                <tr>
                  <td>
                    <strong><xsl:value-of select="title"/></strong>
                    <span class="lang-badge">(<xsl:value-of select="title/@lang"/>)</span>
                  </td>
                  <td><xsl:value-of select="author"/></td>
                  <td><xsl:value-of select="year"/></td>
                  <td>
                    <xsl:choose>
                      <xsl:when test="price &gt; 50">
                        <span class="price-high">$<xsl:value-of select="price"/></span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span class="price-tag">$<xsl:value-of select="price"/></span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                  <td>
                    <span class="category-tag"><xsl:value-of select="@category"/></span>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
