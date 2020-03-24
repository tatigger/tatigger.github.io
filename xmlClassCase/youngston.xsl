<?xml version="1.0" encoding="UTF-8" ?>
<!--
   New Perspectives on XML, 3rd Edition
   Tutorial 7
   Case Problem 2

   Youngston Office Supply Style Sheet
   Author: Terri Lyman  
   Date:   March 24, 2020

   Filename:         youngston.xsl
   Supporting Files: 
-->


<xsl:stylesheet version="1.0"
     xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
   
   <xsl:key name="CustomerList" match="Order" use="CustomerID"/>
   
   <xsl:output version="1.0" 
               encoding="UTF-8" 
               indent="yes"/>
   
   

<xsl:template match="/">
   <xsl:element name="Customers">
      
      <xsl:for-each select="//Order[generate-id()=generate-id(key('CustomerList', CustomerID)[1])]">
         <xsl:sort select="CustomerID"/>
         
         
       
      </xsl:for-each>
      
   </xsl:element>

</xsl:template>

</xsl:stylesheet>
