<?xml version="1.0" encoding="UTF-8" ?>
<!--
   New Perspectives on XML, 3rd Edition
   Tutorial 6
   Tutorial Case

   Harpe Gaming Products Style Sheet
   Author: Terri Lyman
   Date:   March 16, 2020

   Filename:         products.xsl
   Supporting Files: 
-->


<xsl:stylesheet version="1.0"
     xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
     xmlns:r="http://example.com/reviews">
   
   <xsl:variable name="productID" select="'vg10551'"/>
   <xsl:variable name="reviewList" select="document('rexiews.xml')/r:review[@pid=$productID]"/>

   <xsl:output method="html"
      doctype-system="about:legacy-compat"
      encoding="UTF-8"
      indent="yes" />


   <xsl:template match="/">

      <html>
         <head>
            <title><xsl:value-of select="products/product[@pid=$productID]/title" /></title>
            <link href="harpe.css" rel="stylesheet" type="text/css" />
         </head>

         <body>
            <div id="wrap">
            <header>
               <h1>Harpe Gaming</h1>
            </header>
            <section id="productSummary">
               <xsl:apply-templates select="products/product[@pid=$productID]" />
            </section>

            </div>
         </body>

      </html>
   </xsl:template>


   <xsl:template match="product">
         <img src="{image}" alt="" />

            <h1><xsl:value-of select="title" /></h1>
            <h2>By:
               <em><xsl:value-of select="manufacturer" /></em>
            </h2>

         <table id="summaryTable">
            <tr>
               <th>Product ID: </th>
               <td><xsl:value-of select="@pid" /></td>
            </tr>
            <tr>
               <th>List Price: </th>
               <td>
                  <xsl:value-of select="price" />
               </td>
            </tr>
            <tr>
               <th>Media: </th>
               <td>
                  <xsl:value-of select="media" />
               </td>
            </tr>
            <tr>
               <th>Release Date: </th>
               <td>
                  <xsl:value-of select="releaseDate" />
               </td>
            </tr>
         </table>
         <xsl:copy-of select="summary" />
   </xsl:template>

</xsl:stylesheet>
