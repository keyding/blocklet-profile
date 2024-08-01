<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Card>
    <CardHeader>
      <CardDescription>
        Set details about you.
      </CardDescription>
    </CardHeader>
    <CardContent class="space-y-2">
      <div class="space-y-1">
        <Label for="about-me">Introduction</Label>
        <Textarea placeholder="Enter your details" rows="3" />
      </div>
    </CardContent>
    <CardFooter class="gap-2">
      <Button>Save changes</Button>
      <Button variant="outline">
        View Profile
      </Button>
    </CardFooter>
  </Card>
</template>
