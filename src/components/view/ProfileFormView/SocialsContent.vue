<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
</script>

<template>
  <Card>
    <CardHeader>
      <CardDescription>
        Set your contact information.
      </CardDescription>
    </CardHeader>
    <CardContent class="space-y-2">
      <div class="space-y-2">
        <div class="grid grid-cols-4 items-center">
          <Label for="email" class="col-span-1">Email</Label>
          <Input id="email" class="col-span-3" placeholder="Enter your email" />
        </div>
        <div class="grid grid-cols-4 items-center">
          <Label for="phone" class="col-span-1">Phone</Label>
          <Input id="phone" class="col-span-3" placeholder="Enter your phone" />
        </div>
        <div class="grid grid-cols-4 items-center">
          <Label for="github" class="col-span-1">GitHub</Label>
          <Input id="github" class="col-span-3" placeholder="Enter your github username" />
        </div>
        <div class="grid grid-cols-4 items-center">
          <Label for="x" class="col-span-1">X</Label>
          <Input id="x" class="col-span-3" placeholder="Enter your X username" />
        </div>
        <div class="grid grid-cols-4 items-center">
          <Label for="website" class="col-span-1">Website</Label>
          <Input id="website" class="col-span-3" placeholder="Enter your website" />
        </div>
        <div class="grid grid-cols-4 items-center">
          <Label for="telegram" class="col-span-1">Telegram</Label>
          <Input id="telegram" class="col-span-3" placeholder="Enter your telegram" />
        </div>
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
