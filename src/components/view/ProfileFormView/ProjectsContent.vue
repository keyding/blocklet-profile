<!--
 * @author: Caven
 * @since: 2024-08-01
-->
<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
</script>

<template>
  <Card>
    <CardHeader>
      <CardDescription>
        Set your project information.
      </CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <Card>
        <CardHeader class="flex-row items-center justify-between pb-5">
          <!-- <CardTitle class="text-zinc-300 font-normal">
                    Project name
                  </CardTitle> -->
          <CardTitle>
            Online Arbitrage Tool
          </CardTitle>
          <Button size="icon" variant="ghost" class="text-zinc-300 transition-all hover:text-red-400">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6665 4.00004L9.92946 2.52594C9.56401 1.79506 8.81699 1.33337 7.99984 1.33337C7.18268 1.33337 6.43566 1.79506 6.07022 2.52594L5.33317 4.00004M2.6665 4.00004H13.3332M6.6665 7.33337V10.6667M9.33317 7.33337V10.6667M3.99984 4.00004H11.9998V10C11.9998 11.2426 11.9998 11.8638 11.7968 12.3539C11.5262 13.0073 11.0071 13.5264 10.3537 13.7971C9.8636 14 9.24235 14 7.99984 14C6.75733 14 6.13607 14 5.64601 13.7971C4.99261 13.5264 4.47348 13.0073 4.20283 12.3539C3.99984 11.8638 3.99984 11.2426 3.99984 10V4.00004Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Button>
        </CardHeader>
        <CardContent>
          <div class="space-y-2">
            <div class="grid grid-cols-3 items-center">
              <Label for="name">Name</Label>
              <Input id="name" class="col-span-2" placeholder="Enter project name" default-value="Online Arbitrage Tool" />
            </div>
            <div class="grid grid-cols-3 items-center">
              <Label for="description">Introduction</Label>
              <Input id="description" class="col-span-2" placeholder="Enter project introduction" />
            </div>
            <div class="grid grid-cols-3 items-center">
              <Label for="link">Link</Label>
              <Input id="link" class="col-span-2" placeholder="Enter project link" />
            </div>
          </div>
        </CardContent>
      </Card>
      <div class="flex justify-end">
        <Button variant="ghost" class="text-zinc-400">
          + Add new project
        </Button>
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
