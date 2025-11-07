<?xml version="1.0"?>
<xsl:stylesheet 
version="1.0"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:import href="./print-style.xsl"/>

<xsl:output method="text" />

<!-- This makes sure we can match reference numbers to things not included -->

<xsl:template match="*" mode="ref-id">
    <xsl:apply-templates select="." mode="number" />
</xsl:template>

<xsl:template match="*" mode="xref-number">
  <xsl:apply-templates select="." mode="number" />
</xsl:template>

<xsl:template name="chapter-start-number">
    <xsl:text>\setcounter{chapter}{</xsl:text>
    <xsl:value-of select="$chapter-start + 4" />
    <xsl:text>}&#xa;</xsl:text>
</xsl:template>


<!-- <xsl:variable name="b-latex-hardcode-numbers" select="true()"/> -->

<!-- Skip DC1 chapters -->

<xsl:template match="id('ch-Limits')"/>
<xsl:template match="id('ch-Derivatives')"/>
<xsl:template match="id('ch-ImplicitDifferentiation')"/>
<xsl:template match="id('ch-ApplicationsDerivatives')"/>
<xsl:template match="id('ch-AntiderivativesIntegrals')"/>

<!-- Skip DC1 Appendices -->

<xsl:template match="id('app-CarnationLetter')"/>

</xsl:stylesheet>