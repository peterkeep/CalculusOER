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

<!-- Skip DC2 chapters -->

<xsl:template match="id('ch-ApplicationsIntegrals')"/>
<xsl:template match="id('ch-AntidifferentiationTechniques')"/>
<xsl:template match="id('ch-InfiniteSeries')"/>
<xsl:template match="id('ch-PowerSeries')"/>

<!-- Skip DC2 Appendices -->

</xsl:stylesheet>