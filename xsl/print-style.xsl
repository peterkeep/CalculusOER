<?xml version="1.0"?>
<xsl:stylesheet 
version="1.0"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:import href="./core/pretext-latex.xsl"/>

<xsl:template match="example" mode="tcb-style">
    <xsl:text>colback=white,</xsl:text>
</xsl:template>

<xsl:template match="theorem" mode="tcb-style">
    <xsl:text>colback=white,</xsl:text>
</xsl:template>

<xsl:template match="definition" mode="tcb-style">
    <xsl:text>colback=white,</xsl:text>
</xsl:template>

<xsl:template match="note" mode="tcb-style">
    <xsl:text>colback=white,</xsl:text>
</xsl:template>

<xsl:template match="aside" mode="tcb-style">
    <xsl:text>colback=white,</xsl:text>
</xsl:template>

<xsl:template match="activity" mode="tcb-style">
    <xsl:text>colback=white,</xsl:text>
</xsl:template>

</xsl:stylesheet>