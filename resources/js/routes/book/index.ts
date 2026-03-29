import { queryParams, type RouteDefinition, type RouteQueryOptions } from "@/wayfinder";

export const book = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
  url: book.url(options),
  method: 'post',
})

book.definition = {
  methods: ["post"],
  url: '/register',
} satisfies RouteDefinition<["post"]>

book.url = (options?: RouteQueryOptions) => {
  return book.definition.url + queryParams(options)
}